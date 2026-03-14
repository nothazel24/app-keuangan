# BUILDER
FROM php:8.3-fpm-alpine AS builder

ARG PUID=1000
ARG PGID=1000

# Build deps + PHP extensions
RUN apk add --no-cache \
    build-base curl git \
    libpng-dev libjpeg-turbo-dev freetype-dev \
    icu-dev libzip-dev postgresql-dev \
    nodejs npm \
  && docker-php-ext-configure gd \
       --with-freetype --with-jpeg \
  && docker-php-ext-install -j$(nproc) \
       pdo_mysql pdo_pgsql bcmath exif gd intl opcache pcntl zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .

# Install PHP deps tanpa dev packages
RUN composer install \
      --no-dev \
      --optimize-autoloader \
      --no-interaction \
      --no-scripts \
      --prefer-dist

# Install Node deps & build assets
RUN npm install \
  && npm run build \
  && rm -rf node_modules

# RUNTIM IMAGE
FROM php:8.3-fpm-alpine AS runtime

ARG PUID=1000
ARG PGID=1000

# Hanya runtime libs (bukan build-base, gcc, dll.)
RUN apk add --no-cache \
    libpng libjpeg-turbo freetype \
    icu-libs libzip postgresql-libs \
    curl unzip supervisor

# PHP extensions
RUN apk add --no-cache --virtual .build-deps \
      build-base libpng-dev libjpeg-turbo-dev freetype-dev \
      icu-dev libzip-dev postgresql-dev \
  && docker-php-ext-configure gd \
       --with-freetype --with-jpeg \
  && docker-php-ext-install -j$(nproc) \
       pdo_mysql pdo_pgsql bcmath exif gd intl opcache pcntl zip \
  && docker-php-ext-enable opcache \
  && apk del .build-deps

RUN addgroup -g ${PGID} appgroup \
  && adduser -u ${PUID} -G appgroup -s /bin/sh -D appuser

WORKDIR /var/www/html

# Ambil HANYA hasil build dari stage builder
COPY --from=builder /usr/bin/composer /usr/bin/composer
COPY --from=builder --chown=appuser:appgroup /app/vendor       ./vendor
COPY --from=builder --chown=appuser:appgroup /app/public/build ./public/build
COPY --chown=appuser:appgroup . .

RUN chmod -R 775 storage bootstrap/cache

USER appuser
EXPOSE 9000
CMD ["php-fpm"]
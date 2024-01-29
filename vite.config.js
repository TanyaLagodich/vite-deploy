import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // Каталог, в который будет помещен результат сборки
        assetsDir: 'assets', // Подкаталог, куда будут помещены статические ресурсы
        sourcemap: true, // Генерировать ли карты исходного кода
    },
});

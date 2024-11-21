<!-- resources/views/components/layout.blade.php -->
<div class="layout">
    <header>
        {{ $header ?? '' }}  <!-- Optional header slot -->
    </header>

    <main>
        {{ $slot }}  <!-- Default slot for main content -->
    </main>

    <footer>
        {{ $footer ?? '' }}  <!-- Optional footer slot -->
    </footer>
</div>
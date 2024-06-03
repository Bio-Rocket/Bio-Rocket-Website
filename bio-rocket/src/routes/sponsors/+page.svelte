<script>
    import Book from "$lib/assets/book.svg";
    import Bulb from "$lib/assets/bulb.svg";
    import Networking from "$lib/assets/networking.svg";
    import Tier1Logo from "$lib/assets/soar.svelte";

</script>

<div class="container h-screen mx-auto flex flex-col justify-center items-center">
    <h1 class="text-center text-5xl mt-8 mb-8 text-primary-500">Our Sponsors</h1>
    <h2 class="text-center text-4xl mt-8 mb-8 text-primary-500">Tier 1 Sponsors</h2>
    <div class="w-full text-token flex justify-center items-center gap-16 mb-8">
        <svelte:component this={Tier1Logo} width={200} />
        <div class="sponsor-placeholder"></div>
    </div>
    <h2 class="text-center text-4xl mt-8 mb-8 text-primary-500">Tier 2 Sponsors</h2>
    <div class="w-full text-token flex justify-center items-center gap-16 mb-8">
        <div class="sponsor-placeholder"></div>
        <div class="sponsor-placeholder"></div>
        <div class="sponsor-placeholder"></div>
    </div>
    <h2 class="text-center text-4xl mt-8 mb-8 text-primary-500">Tier 3 Sponsors</h2>
    <div class="w-full text-token flex justify-center items-center gap-16 mb-8">
        <div class="sponsor-placeholder"></div>
        <div class="sponsor-placeholder"></div>
        <div class="sponsor-placeholder"></div>
    </div>
</div>

<div class="container h-screen mx-auto flex flex-col justify-top items-center">
    <h1 class="text-center text-5xl mt-0 mb-8 text-primary-500">Sponsor Us</h1>
    <div class="w-full text-token grid grid-cols-3 md:grid-cols-3 gap-4">
        <div class="card bg-initial card-hover overflow-hidden">
            <header>
                <img class="logo" src={Book} alt="branding logo" />
                <h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>BRANDING & PR</strong></h3>
            </header>
            <div class="p-4 space-y-4">
                <article>
                    <p class="text-center">
                        <!-- cspell:disable -->
                        Your company’s logo on our hardware, website, design fair poster, and socials.
                        <!-- cspell:enable -->
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
        </div>

        <div class="card bg-initial card-hover overflow-hidden">
            <header>
                <img class="logo" src={Networking} alt="networking logo" />
                <h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>NETWORKING</strong></h3>
            </header>
            <div class="p-4 space-y-4">
                <article>
                    <p class="text-center">
                        <!-- cspell:disable -->
                        Join us and connect with our industry partners on Sponsor Night!
                        <!-- cspell:enable -->
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
        </div>

        <div class="card bg-initial card-hover overflow-hidden">
            <header>
                <img class="logo" src={Bulb} alt="R&D logo" />
                <h3 class="h3 mt-4 flex justify-center items-center" data-toc-ignore><strong>R&D SUPPORT</strong></h3>
            </header>
            <div class="p-4 space-y-4">
                <article>
                    <p class="text-center">
                        <!-- cspell:disable -->
                        Product reviews, literature development, and testing in extreme environments.
                        <!-- cspell:enable -->
                    </p>
                </article>
            </div>
            <hr class="opacity-50" />
        </div>
    </div>
    <h2 class="text-center text-4xl mt-8 mb-0">Help us realize our vision today!</h2>
    <h3 class="text-center text-3xl mt-4 mb-8">
        <a href="mailto:biorocketuofc@gmail.com" class="email-link">biorocketuofc@gmail.com</a>
    </h3>
</div>

<style>
    .logo {
        width:50%;
        height:50%;
        margin-top: 5%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .sponsor-placeholder {
        width: 150px;
        height: 150px;
        background-color: #ddd; /* light gray */
    }
    .email-link {
        display: inline-block;
        padding: 10px 20px;
        color: #62A945; /* Change text color to light blue */
        text-decoration: none;
        transition: color 0.3s ease, text-decoration 0.3s ease;
    }

    .email-link:hover {
        text-decoration: underline; /* Add underline on hover */
    }
</style>
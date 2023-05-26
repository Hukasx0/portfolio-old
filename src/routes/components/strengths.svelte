<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView: Boolean = false;
</script>

<style lang="scss">
    .strengths {
        display: flex;
        align-items: center;
        margin-left: 15%;
        height: 100%;
        .item {
            display: flex;
            flex-direction: column;
            width: 20%;
            margin-right: 10%;
            img {
                align-self: center;
                width: 70px;
                height: 70px;
            }
            h3 {
                font-size: 1.5rem;
                align-self: center;
            }
            p {
                font-size: 1.3rem;
            }
        }
    }
</style>

<div class="strengths"
use:inview={{ unobserveOnEnter: true, rootMargin: '50px' }}
on:inview_change={({ detail }) => {
    isInView = detail.inView;
}}
>
    {#if isInView}
    <div class="item animate" transition:fly="{{ x: -200, duration: 2000 }}">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAEbElEQVR4Xu2cTVLbMBiGJQe6pjcghc7ws0nX5fcGcILSExROAJwAbgA3gJ4gFOi66YLATAH3CNm2NFblNEwLcYVkS9+PkXaZKJLyzDev3te2LEVsIAQkyCxxEhFBAxVBBB1BAxEAmiZWdAQNRABomtpWdKudTvxo9FeEkJNKZp2rxdcnQEwLp6kl6JmzbyuJbBwIJSb//mt53F1srmPBrh3ouU83OyKRHzTQicdQpZT7FwvNLQzYtQGdS8XPcbEnlNowgOx1F1+9jKBLEphpp5NyTB3oqtGabG4aNEpxoUz6FAyX74v1+L8jdDToNy7j++rLGvTs6c2m1t3tIj0uBJSp3e7y1I4veC7jsASd6/HduNhWSm06/Nnei1+y2Vlt9hx+460rO9CDTW9MHAih1pwoIFZzvk5WoOc/py1dxUcP/bEd7kxX89Vq87tdb/+92IAebHqicWStxw9Y4YYVNhVtCiE2tZeJ/mqM4AZSliHkKdZolu7fhZGVDpcQYiSNvAner40kaMcQYuKMaulIV7RzCDFhJlLNpDbDkiHErBrIlo5cRZcOIUbM+JaOFOgqIcSoGgQsHRnQ1UKIsZxJWDoSoKuGEA6WDhW0pxDCwtKhgfYWQphYOhTQHkMIG0sHDtprCGFk6cBAhwghnCwdCOgwIYSXpQsOOlQI4WbpgoIOGEKeuu6sv5fHIsu+Zkl2gn2h//FivV4mDRpCLDCPdqED3gtogBBSCjMl8JVBg4QQT5gxwVcCDRVCgnEeGTic1JQGDRdC4DCHrHhn0NAhBBNzEXip+h8vlqYPXdflDHr+PN1zfObNdU30+0t52F1ovndZqBPo2dPrNSmT/GmhZ9+UytYvl6aPbUE4gY7V/CDrOZ2JiaBtS3Ik6rnJhxPoYbxul11bnX6n96mty6Wpfdv/5AQ6H3TuPNXHyowHcmzn5tsv9GZ4T2b+9Hojk8k7m8M5fGkWrzw/Qjd+J3ZdTw44V/Tj6QdORMmWSuRyzcH3pMq2ynjonFll0M8EfEefGFivcmLAO+i6gS8rFSMmBVpDGUlNJalAB82k4itLBTnQ1MD7kgryoO8X+Ocuukr155G3FASSO69SwQb08P5jfvwYonmXChag89tjyZj6AlHNoaSCBejZs9s2QPgJKhXkQQNd8w4uFaRBDzfA/OpgK5QwQ0kFadDDG757gSCDSgVZ0IHtHLhUkAUdys5hSQVJ0IHsHKpUkAQ9d5bqO+uOb5QxCzm6VJAD7dvOUZEKUqA92zlSUkEKtEc7R04qyID2ZeeoSgUZ0B7sHGmpIAHag50jLxUkQFexc1ykAh10BTvHSipQQVewc+ykAhV0GTvHVSrQQJewc6ylAg10/mCkkol+S65VYy8VaKBtnUZdpAINtMWxjFpJBR7o/N3P2eARgqJWO6lAA51PXHQ0o65SgQo6n3xwILTRX8uEnEgaycnF22bHantk3in489HM+XhbfgTtDaV5oAg6ggYiADRNrOgIGogA0DSxooFA/waQQ5N586CAWAAAAABJRU5ErkJggg=="/>
        <h3>Lightweight software</h3>
        <p>In my projects I mainly focus on lightness and minimalism, which makes projects cheap and easy to maintain, fast and energy-efficient</p>
    </div>
    <div class="item animate" transition:fly="{{ x: -400, duration: 1500 }}">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAFe0lEQVR4Xu3dXXbTOBQAYMmkHR5hBTTAnAPlJX2GlmYFlBVMWQF0BdAV0K4AdjBlBQ2FeZ7w0JZz+El3gB85EKy5cmJOJiSW5Ht1HYebV2RJ/nyR9WdVK/mxCGiWUqQQJdBMQSDQAs0kwFSMRLRAMwkwFSMR3WTozvHgSr/bTpnugbSYO/8MOqd3233STCEz8oi+ffLpidb6eaZ+dN9v/tmjrnDM/G69+bCdqEt/q8wcnt2/8YyyLFLoArmoYJOwfyIrdSWvf2b2KbHJoKeRm4T9C/LPytNhk0DPQ24C9lxkYmw0tAt5kbGdyOPKG2P2zrduHGDabDT0uLLHPpVYpDbbFxnuK9Um2zvduvnS5x7npUFD24xjYdt8tUk6SZJcM/YlZUwH+kn5y8oYdaGVTlWWvcvfXUnW8+3lcCPb+pFAU2LbPvi3JHuiEv0A8u0ERlEfeguvVrPkYF4/vg5kUmgs9gig9RhidRvyGnWxUD99lKnh4WSU14VMDl0F+/Kw1f++op7CC2eXBvj/TwcGTwen99p7dSJHgQ7FhsbrQhm1hgpe98XFdIDrfwrJi29Wdcja6OnMQ16QbieWFNGQo0V0wdIg7KjI0aGDmxGWwP2lkOjILNALjs2CzAZtC1p//ekZ9I2f1hO0s0steiQcdYr2MpysfD4IaZlBjO4bEinNhnrjfbd9gczHeTkb9NfWMHSU56w8SYJh62JpoElAGp4JS0Q33Iik+gJNwujORKDdRiQpBJqE0Z2JQLuNSFKUQt86Hqyp1nCNpKRlz8TRTSyFXsTR3MI+L8c+EIGmenICTSXpyEegBZpJgKkYiWiBZhJgKgYT0T796Hw/Mck+DCaQasWksJ3tYemlmH60T53W334eMGwX8KlKzDTp2eb1q5gC0EPw9TefYVvc8v9Wh/oq5nMRgfaMkVqhbRuejNYCl/6nE72B+YgIFdH2CyaTmX+XXhluELu3W6A9o6RW6PE2gi+edW10MtiW0MaslqMiWqD9YwcFbYuB7p2NaNd2WP8aLWhK6EejrFAX/0bQcQcsxcc6ZUEG3Z7Hv8PIEL5I2C9zSC4lvbLun6ywUDVVmEklWTMMeAoCHYCFSSrQGL2AawU6AAuTVKAxegHXCnQAFiYpBtqWa4fZrvK/wsgw5nRp2YRO5E/s8k8vLsMJBy4D++9lCwPokWFRgfW3gxdw5MCuT4VC09QHrY/ONtvla4WeN0MGHXOCqS5o7NTo5DMggx7NewxgRdzseD5k72R1QMNCaO9883rXu5KOhKTQsdrLWqBN9vB86+bRQkLnUR1h+wE7NJy4sPpdb2BWvacfEGlE28zvnHzcNTp5QRUJNh92aOIz7+w9kEPHWBnnhqZ8CRYBRwqdI6+YY+r5aW5owElhnr2L2V4QremIhVxL0zFSIsUmieiYyDVCk2KjoWMj1wxNho2C5kBeAGgS7MrQIch2lAUFbVft8kV+GdpDuX2OuEC12ZWgQ5CLU15un3zc0Tqxm9aDf9Ggx/3lgAmxytjB0FWQC9mqQ/QY0HCw66PJg11jY4dDj45nd56uO++8oirYxNBzD6zyxE4NPKTQeZBgaBudLizXoVCj7b4KDrLym+mjgrbvCjPUj8o2KzqwKyGjhuDzsF3Ikw00xSHfroc+Lg+AzL7vYdtzsCsjo6BnRXYIcgGeLxisqOdlqzOIiE4hivuuKJ71dp7CRiGjoSexqyBP32Ae4TP28oVC2yYCHtyrP34kLzFTnWPsnSptcpS5DtsTwWzSnq5U3hzo1l/5WdJwEq8XtD21V+me1uqQcjKI6g/gVHoZBneEkRe4/lKR69+RxZNc3ghokjutOROBZnoAAi3QTAJMxUhECzSTAFMxEtFM0P8BZH+qiEJ1cX4AAAAASUVORK5CYII="/>
        <h3>Security</h3>
        <p>My knowledge in the field of cybersecurity helps me write secure code, which results in less number of vulnerabilities. I can also conduct penetration tests of web applications</p>
    </div>
    <div class="item animate" transition:fly="{{ x: -600, duration: 1000 }}">
        <img src="data:image/png;base64,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"/>
        <h3>one-man army</h3>
        <p>Knowledge of Frontend, Backend and Penetration testing allows me to better understand the project and deal with various aspects of the project</p>
    </div>
    {/if}
</div>

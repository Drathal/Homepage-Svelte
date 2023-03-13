<script lang="ts">
  import { Section } from '@drathal/components';
</script>

<svelte:head>
  <title>Imprint</title>
</svelte:head>

<Section>
  <h1>Imprint</h1>
  <p>
    Name: Markus Dethlefsen<br />
    Email:
    <span class="email"
      >ed.<!-- abc@def -->ne<span class="spam">ahulty</span>sfelhted-<span class="spam">ahulty</span
      >sukram@o<!-- @def -->iloft<span class="spam">ahulty</span>rop</span
    >
  </p>

  <p>
    This is a private website and all views and opinions expressed on this website are mine and do
    not represent those of my employer or any other organization. The information provided on this
    website is for general informational purposes only and is not intended as legal, financial, or
    professional advice. The content of this website is protected by copyright. Reproduction of any
    kind, including the storage in databases and the duplication on CD-ROM, DVD-ROM etc. requires
    the prior written consent of the author.
  </p>
  <p>
    All links on this website have been carefully checked. However, we cannot assume any liability
    for the content of external links. The operators of the linked websites are solely responsible
    for their content.
  </p>
  <p>
    Privacy Policy: This website does not collect or store any personal data. We do not use cookies
    or any other tracking technologies.
  </p>
</Section>

<style type="scss">
  .spam {
    display: none;
  }
  .email {
    unicode-bidi: bidi-override;
    direction: rtl;
  }
</style>

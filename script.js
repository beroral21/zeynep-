/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Mine",
          artist: "Beyonce",
          cover: "https://lh3.googleusercontent.com/viN3fnxUGe5qWNymzelyYpOnu63lKhkVjZqP7CWRL9_HhFcp4PBkltDHLbHPzhPDpeZyFg868AOTQiY2xOwfTP5o41UWpqRnhtwEih6keuutN0JwYudc33gVsfmED3b0Bl0e-j0oaturrvdMDV3KcGcJHweahk2rJVmzApg3DskC2ricf10XxkSTqcLTLkSNaTmMwmTlwSnRVNXytAbVOZuzDIHmSSk3ARl-7juHnE2TjZYmpdg1qy0XInuUliUcIpbfR93_5FfdY9qdg1C1WSX1XI9b9k2-cu99D3MxZ6qHs7qxqwDpi2Dhq9VpVWhkvOPh5mbrkQHALAj6PMfWTU9XvMv_8Epugc_TcGZLq-QXv6JPGTuO-8pLI9kPhFLaJlYBDQQWWc_S1XMR0siX6tL2He4eq4SnUBtb6V-_ETcpgGFXTRyenNC6dMdND-pq5YI6HzhRw9KAPe3d-EjnOzDBrR1vwFxSw0_15o9YrxMVnu3dIHiPzn8os1zQ4_OGWW2zKma8HbbHj-MoY5m-pBpoV_JiNtnUUdYv9o8DB3rIpL3V0WmSFi7T0AGt07241MfZjOY0z2MnQwyRjkj7MrGjvSTvgTGKBK607x5pPN6sZgyEqkItpeFucSOlMlr5uymPh6vZQaJ_Yh7PyMCmDH2o0XwpJErihrH4jsoGf5OG-MWNpOIZpvKfo3qRxKC002YJE9RF6ghIlE9JITMtV5zIChoHTPlO9RvhYAOrCzlk4dsqAyRX-KGtOPGIGQ8FLrvluA6GYrI0G42SOBIURf753da4DJQRxroZUMfkUTMNju1kd-M8t_8pZ7htJaKg81nI6s9rQqik2DiM9Xn0wQCi-vL4RWt26pD1f_3AJB9FgvB5cgHhl4_lVhVGPjV959a4wIZB9lmt72tEfHpj889LSjiwi380Q7Z2HdDjQGNNJzR2eBPjj71obYg9484vIvr4_nIUvtI6r3xQzw=s360-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/mp3indirdur-Beyonce-Mine.mp3",
          url: "https://www.youtube.com/watch?v=IDvu1ehPq0g",
          favorited: false
        },
        {
          name: "Benim Hikayem",
          artist: "Teoman",
          cover: "https://lh3.googleusercontent.com/Zi8nQl7acwE36jYtkiTpjiVzLldhR22nHpHNBG7BbanfLrgXcg6xP28o5VwV3_WFzSlOvpV5F7n_6yKMnOtjvwGLv_OTYHh4IhTdmORFn_F4yVYw64zCOGkfbzCBJ4DX9sKvBiXpI46wHqzHwzBc1ews774XNJKSg6nxa20VXz6QdhQueAv2-PLDVUfrUHKIzHie4BW1849XQAh-lm4szeXgikuNzIQ0rCn3M4LtOnvuXTvObt9QPcSh-fLyHw6s-6vNvoGP6Pfz2laGYUs_v66Mq0Fg1iSRpeJkBYL2J9QDCBGB5Un-oPVEqwFvFSVR-Q5FmZhwaujCVn-_EQdjOaf2kFJ7ZFPOgAbHSYxTk6113qED1vfuE9L8M4RZr5u-ibPHob8gi6smX3vISIC7wyuRVw712_kw8Olyp0uGxO8vgMbRaevC5QNsDW13hNc8YaEYVBdYnn-tAW_98mxANREtBE807IayTLD7xRYj9ZcubDwYsacEZn9oig2Qcc5sqwbKRCYWboiX8gxOpP4O7eVE6TH7yYIAgeKdDXKsg_x2DCWtGd0nj8hDZdDk4qEQvnR1m_-saKhRwqjUTJBKWfmKc5ClY8flPKZOUW3RTAOFFvlC0a2D3TLGQSwZ0ZXo3rau0s76aidjP1uofml5RkjgOz4ZCBfWGmD7YWCUXDOHxvopS13y3AasYSkkV2G3IzhHRHHNbypHIxm8d3DqnSWdR7PXzbrzzsvUIVZ7szXLs8AyP2gXsXfx1_5I-GQBAuBqGaJuG2yWalfL_-b_lZY4zeOEQza3RT8MVV1S0sxVT7PzgL-xdKS5Uzjj6xCHKw8CaqmcnlrnVVjmxCUntkEF0oPPanH3EV0uEsv6HO3QyYWpFnZRQ3Us8r4mG_IYWvGJdYjTRAOlvtn0tcqi9PEXr9ku3eaWvd7vOGyFUgg3kOwFMHaeX1Fcu3vWR7bTqMkD3Va0LzxTzeSEEQ=w768-h1024-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/mp3indirdur-Teoman-En-Guzel-Hikayem.mp3",
          url: "https://www.youtube.com/watch?v=TmgPe8uwPdk",
          favorited: true
        },
        {
          name: "Gözyaşı Rapsodi 3",
          artist: "Khontkar, Lil Zey",
          cover: "https://lh3.googleusercontent.com/3ttlVSHTWxyjKuwN3A38Nl6xWIhmYf6ipKmS58S1jetMVPlHN46PNfBB1LdM-29REX4ZJBPDIm48jKeA78nRIPaelGWai15H7u6uQokIVV0nGXBunxeM_3WIlnTUFc9vuqh3rPbuw81s8Wh-bkmqN4RyOHOing58n2IfJmtWaRb6K94ea3FgCk34WWSIhn_8jdtu4qmRwKkBvM6etxw9U1Yqq85wQE8ayT4TajpK_NMHA2d_ETL8TFscCRN1af29qQcnrnf7AVDmd5-ni0nLtpgWxJHbyd3mW3CRxjypaZA4lZX9GIFpzL5Ejj6y0ok5O1NP7UYUJW5o7HY1VU8T01T8VtYRfTph4YFcwKt0SCYc_5l8effcgQT_92-xfZUQ3q0C1oBKZP5s0EBdOFl7k8KyO0Jm_UAkh5mEABwMxIAseKyFfh0ACDP9J299mtlhxScwAEVKXHZ8ZIcDeCdxxrUTU-0VUDD5xwDQplfcfTqBiTiRXl-n9Sx45aVJSnnnKkOmEXoi5Hshopf2fEvCkmGtUZGQ3kxiok4wwUkDUvQr4MxBKUu4ioNdQEGBVrQDUVzhSlFxwlGejiQ9ZuFe1dQCxxXpgWnylSP-6JBqA91pcKfq8xtkwGmU57HeNM3CRmY9o7CqTgKIqathwVYVNFXBWO3w410w3KlttDEjlh4k4UP7aKxDzWuH2UHfA0EQlBnLNgxIw7Ms73rJlIlYDxnI7buPqUN3hUMU9uC_AnAxhd6-Er9FGLNxrfaKHjsqE5HKlXlfiLR0XUnwyEPu0NwsIwxEgOivyRObEVlAslvvs9JMuSza_l5Rf85AW5Lw9VxT1mybYvKq6xVPQzR6zs9mQxreEBuDy-q-5ZK756hF2vuDAyAVKVm29KuGE-4IxYtTgR6418uMRmJp9d0yMoJ36dLZ7-AOEuzR3ZuS6O8I8wp470mTJDqkdNmwvovt6Nf7S9C9LOuuJ1432w=w768-h1024-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/Khontkar%20%26%20Lil%20Zey%20-%20Go%CC%88zyas%CC%A7%C4%B1%20Rapsodi%203%20(Prod.%20by%20Barry%20Allen%20%26%20Yig%CC%86it%20Boyunag%CC%86a).mp3",
          url: "https://www.youtube.com/watch?v=d5C2JUlgGYk",
          favorited: false
        },
        {
          name: "Hoşçakal",
          artist: "Kozmos",
          cover: "https://lh3.googleusercontent.com/fWxqURzNT2cJS6zDAQQhqf7S0vjvZjrW4ghGl1JehxQQJkrmiAFFeSh0aueKaAG5pD5kZQ3oYKV6CU8i4M9VnKYHut65EgzZr0xo2A3201UmBWxz-uWeu-EHzk8NAkaijqG6Us2ZgvRx0y9EeZQpjhCq9gu7CHzT-oTQ_IZaNiUx80oUYGsNervKEniLS2NB_T1V__kCBWZrIcDk3ekZ2whu5m9iqO09V-gq7WS3lynRAsug7KOVMW_xeFidOwGogoxXXvz52pt3K1vqOaDJuzvAvRNjyPsh8odt9SDf3CM0xQ_wZngGn9pUDbMFKmv31naAe8iuocEYyVBflOmWOBCUYDEKDCHO74i1m5tMXHluhZ79YCJZtcQQS486V8hlTPoy594f9926EVy6qjuVbspkEWCgkteePNJkQXI3YFvIlXBYfMNssEMB3u3OGy0dELyDOb2kf6mDFq_p0KTg7bJQrOAAUzpL3KtRgmdMZZEJ0qa29D_61HzugNwSfbX9tmp3Nk48qnQPz08Mtrhs8bJvW5QRv9tAhk5DxOn2lva98zNEgVJpsMVoFud3F_VzRHNfVTye5znR6dyvj3jUe0TA_g0XzwnJRJr13GGStfJIiiWx1BmSvqlLvdeCj6IjUtipu7-1NqmWtI9wxmr-Ng_00v9HJEjXwfEgvIl0ra_DiWjgfOg3eA3rJd0Dqknjz8zihuQ88q9Waq3KovgPweySyI3GV1XoEbiE8WPXHR5cONlLHVvnPimt_KDnC_-dGS3sf2OO-CrD66qeNM4IXJ0t27_YPPLS0suaDXYE8abOJvm2ySSXd5I2fBlEfzmx6dT9yJ3nEOj3vXIn9Koqs8eYPjcBxuFmr7RfiTxTlN9428VloTW8u_wkaFIaUpq4li8YlKGCkT3WX5d5Vk_ZmNuhjgkMFlZ72UlHT8PUdPsb-0qISiRaHZ4UpBIbPHP-xjE65f6Kq2XpEFp3Vw=w828-h1334-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/mp3indirdur-Kozmos-Hoscakal.mp3",
          url: "https://www.youtube.com/watch?v=m10zI-kEK2s",
          favorited: false
        },
        {
          name: "QUEENS",
          artist: "The Blaze",
          cover: "https://lh3.googleusercontent.com/Jtmsz_kVANu2wCKj_nspnyWqs-gUhM6kc5U1sD6UamMTprKIjagyKyiwTkmo7Avci-abbBS_4Vln4shJ0yIbfOE6hhGKAwo1Ph29XkfSuC11taPXXIu6B1PhZywE3sYZKgn9Xq_SlEMq8A5o3YPlF5AN14zXxiVUULCXcaWFiXbwlhpDJIcNkXMa3AJ2ahdtFiazOBc2edo6EDPZI1xhJYlJfK9IAHjNzihaw-HYk1x2iCYhgnvM10wgm8d0s1m2oTdDWZXTLnngOHjWDyKXa1GOvEklnFHZ0W7I5kickPCbNSntW8UrhbngHOvHgxOpL6-Dauauyrr53A3VgNKlbht1hBJxpsYkogzdYnSeOKugye_Wlu8pyUmHtJfR9zWNWosOloJJOHdLgdGtccJTbpE4SztmF_4ncWLsfmd4pYpUa2xV2AaETcipZvkpTjHemH_Xfrb78ryH511IUfplC9PZGR3k8mOWjR5L2owSDVu9wgCA-Ko1l664tq6sSHBuqb-d4WSj0F15jQEBdXkVmOWew4KkZrnjtXswOl-P0W9_x1TGHx9MlGYhYqmPIbGeKGd0RAAxWQhlswlhfN_AxcyjyCbrCf-MPiMxkoU6FeX94eWElwvYc7CPEgG7zYMMiAT2IfCG_db-POR-ohdUVbPMRWhtGL3ARUq1B71-1EGMeG27emRymc85ZrVl9l9v8Dq8kY5xhQ98cWzuPBkeNcZgGNoXWO0GOp5cw3eTi8d6IRnMhDh4NK4kSgG7vegOiMCxEuBAUxn-iKMaQeTzWBICPtkyvROk3cXWQj1BwHySgOifhDD6UvGFPSRFlpUTB9_kp9snP7RhakTlZUbkRXm7tHC9m7ixoF_ndASRv-tWm_NuKrr8p6ts-w3y7Jttkxt3ro7zxQoBiyX5hdU-w_zGodo3dSx6-6cpPm-CMnKt-86bc3TozN95WLkb5CLbnql9F4fSPVxgSJVILQ=w1184-h1578-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/The%20Blaze%20-%20QUEENS%20(Official%20Video).mp3",
          url: "https://www.youtube.com/watch?v=ZdJ6FO9HAcc",
          favorited: true
        },
        {
          name: "In the Mornig",
          artist: "ZHU",
          cover: "https://lh3.googleusercontent.com/iLIvHkjZjZtGlgskP1EdT8_Xr8Z7RYxaVxGiD700GUQ0khEgOceyC0ERLYrqvzD9KqIQauPgLhUbGyCLnK9qQ4RD2RAd_FB2qq1pF21lrXS3yguBnuhM7yyDPIG6qCI-M9BgMQZ3XxnMHDDlWIjLh5oqRXj7qyuOeiZF0UEvtLWBqfe5-Z7gvtxPE6beIx3inpHIws31R78pWAqoHTgt7_9H4HoXB7GuOh-zCTDyqwdEe7P84gvRynDYKtMA4dA8ntZbJlK4Ixtdfh-28aesbQd6ayPcuNbdZDjAHOGBqVeIQOA8MLVX116geaISuEV1CJ-PGNq4CoAvUccWo3kLVlNp31sj3NNWzbN6cFz2n0DjAmpEdGHDcfOxWUrhSUYEcv8csnoH9CVcFTK_dqpQYQmmhVXS-rwWyVvpToS0rzd7hdLGB-8FST7Bi1U37ySD8-HZEoBGVxN8gJgIhrTi4JPf4P1vyejOwmAcBRT-PUgrazlkX9yuDv3nHR-qwIQg3ZXdttQRqpM82LkK_f6Qa0VmkFZkVbzuXa95en9oMirQlON7gyg61E8qXEfhIJ2iWOeFwQBPpDFhfN_yROqoEEXPEwutakUuZg2PwbIEtHG9hY_wLjPFzgwnbNSFNRLNPuHol5YUkiZl3XqOD-PN4CqRmowRkgl_P6kjKkttno7nYc6X-tOzJ9ungCXcuFcLYJMzFT8poKTO-y6rTUb_HnrPp9pRaCSEQaPSo_SMecS8scTbaa7r2eYi0J2WriL767G2DoMecRIATBz_4ZFWCwqBNTiCPSajhQMHVLKhAmUIUs7obBnQ0z3r7vS2YfKVVQfqzWbFQDLwA0xu0Z0lItaaktzGZMhMwE0eEMiV5szbHnUzxI2Kx55qCMkMVUTPjWTTwyFnete9GQ5AGtyKWEhuI1fVAsmkEVHgIjNmRLZQ6idXojlG61jxwBTWhxE-JuFF_nKRLO6TdumdoA=w704-h1115-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/ZHU%20-%20In%20the%20Morning%20(Official%20Video).mp3",
          url: "https://www.youtube.com/watch?v=5_ARibfCMhw",
          favorited: false
        },
        {
          name: "Toosie Slide ",
          artist: "Drake",
          cover: "https://lh3.googleusercontent.com/O9gejic0LNnLeAxeQ8SMfIDv-qJQr8knxg8B05su7wonUiCgEPAHUReosIvPN6tkMlmmATqrMM87TD7Uw3dWSUG6P7Ac3co5RAo31LqyqPd8j8zhBSoyKc0kQhorzMPtOYd0M3BJiJFrN3xb1i8yWLo0BsTwyhK0JLycoSY6mkgTea7FnCHfbNT7Txnkqsd9QjXP3q9cLGzxLE_b1wqTdD0WE5HGVjOB9kEWepctzEg_MM4iDA_nmD85Wm8EJkiiw_hrKlIhQNXyVe2k6bQBKMsSHBE-V5IT9Fn0Bh7VmKSev-IYi1vlEwywfu5s99Vq6eVWGTSMV2J7ditSe1y4ANB5Skp4neQjdYTVCtP4hSIV0EMnSr0wEXvQNepkqnxFV1lELR3Jk5SgxjD8MmRQH71TpMY5k8a4HV-_fl53pBaytc-L5rRSknUuYg55FPkaB5kSl4itO1r2LtLFF7piq_6ZI9Ht4pJIwdba7mp8mCwS2EO0QYaERP131Fwi6SmkVuTieBfy3OFx7RVoYfMDbYhUOgVEncrJdPsm-s4Y7OIAtgwbRC_ZHgIfI6Y00MdGBCeZwdnYh94dxJnI9IpTie6acdYQBdJQ-p7icV5RIakM-eLb5cbDQUVwPrdwUQT1mqOWB6S8ob7YOHVbdfJPczGAJWZb3gj_lNemHoDc1uslzh2MUsIWmqQ5iPgDczpdnVAfOroTaAbVGHYOzqRm9u2G3SGJ3ZiKa4FQPLF3DZP0-GMBWpAlrwmLFss2XaiKkuekZeHFyV5SOlV4Ptww6U4byjiEQTIqsUaU_3x5dP53MWxP18o0P0y-aKSRy9EysMwQoZ4vVeJHIQo9WOHXP9pzB6YfMBmwPeq3mIhJ0tj4fuW1h5G7ELwX1PEyD5RYoOhQlcH0fvbWTfO5KojdoT83zfzOH2K5ZMQU38Umsrylt_TneQCHqUNrJAI8h8lCF5iYe8EpBnSQpo-U3Q=w828-h1472-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/Drake%20-%20Toosie%20Slide%20(Official%20Music%20Video).mp3",
          url: "https://www.youtube.com/watch?v=dGYxT1QReQs",
          favorited: true
        },
        {
          name: "House of Balloons / Glass Table Girls",
          artist: "The Weeknd",
          cover: "https://lh3.googleusercontent.com/klLVgQ4UIiYZr8soy3DybKZV22PawJlkWYwlhTxgF0lZiho8j6fwLRcZbBQ6Y0NEaqURXkhAJNtw1EUf7oiryePuS_m_4WZQlXjRQ2wh3SqTfqrvjDwAHQWV6GNeAk_oQDa_N4rmE98IWN69T-VXyAvF-Yn_ZhwwymBBdr2vQH6LZdZvqw2WslAHuCGa5zgE7b94Kx1iVhamH1JzgeTpuVkYPMH3REyjLHT00Rvde1cNQFUPV5TyfWwopX2cqxCxXuLDWLRsYKBUbIxO9O2vumvhynpWG4lWX-dLWL-yhNaCm1oIYetReuwf-B0VoSNQxTolXNLtsf6k0bC1HAC8xqiCX6UE5yJcGNIvezxnarFDpGarvsUYgXonFzOJy6JP5jCSUfjFK-Ly6iBEEEBqy2fPUjQQKBsqRunUD5n4CT4koA5Qj3LqxJ5sw2biqOgvOi7VIqOx3dviswdHB-LDYlqRFbvz1-7Mv0_iTaQyxBz9mxT0eM63soI5zUjvpYDqWJY4Owf3AMqrp6f0w0UKGk5FV2Hc2zdVGzlFt9-adggGWzhnfUD-f87lohsJNxchUo8Ngi30aBZ4qp3H20Hls4jTEA-PdvgBYt09EQsYbJ7FoEIYhABfrcfpvszrvWWw9PtVrYBClf5zmxzoXzdsf48ZnN4sSxbVt2ONZkQ8wkePsXdfP6IHUp3OcbMmvGZijRX_ROyBHnv763drTCv9AEt7vowXS_cG3SoAez1r0h6ZC3kI7muRJrmMeIJg4HC7KXB0OYCO-6kAG6N92nT2gqrIfU1DueKzacvKg4kicZVeteYOcO9CyJ9L8DWR06bSFOQEs4BGnoG0IBVAkBtg-WxBOTp8wiJR0EHcIBG3ka1OwdXyKmqStjuKBDTpwindQ9G_9JE3ETQQvTD7MT9wnbUJo8Ws3TM_uwzgvICturQ2679eQrb-CRO5NUh18rJ4U6msrjMMVXTJQD8mGg=w1184-h1578-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/The%20Weeknd%20-%20House%20Of%20Balloons%20-%20Glass%20Table%20Girls.mp3",
          url: "https://www.youtube.com/watch?v=8ex38L8xtNI",
          favorited: false
        },
        {
          name: "Kül",
          artist: "Cem Adrian & Mark Eliyahu",
          cover: "https://lh3.googleusercontent.com/gIDd2mdkLMWaCGXep0eLVBONkIl3K_B2OOEwICJ1p3b7MZCWVB1tk4AOoH7xfkagakS-v3M70wSMi1wEybtriT3FGGIyKHji40jVGKhQyO5eD3JhKva9LmqIcKeAmktXbZA1co-oGBFd7-OIffmjLEDbJRnrdHHWSQWyO6biQK2MuG47noufPPatJspMUJJfwuapdRZv3eIryrMZp_p7C1eqwm6dTepS5PZ6hhimt98x195q2UYn3RgMJHnJpTEScbsoNZvQRKUV-C6EEn-NFQnnU6B8Vrzc4rC7srNJ41cfF9RZ611_mYWZFXT9pyo-JCcB6DoB6N6TiIsNIh07O648361DeN9kW1egKf85LBoDDfhZWFYissRL-ykInecPZX08RlIgzuLDZ4jk5gvRLa4HjO3pA2KElhSHW136mKTC4a07q79l_ep1AYTJYMTlvgroBKOzBNvN9azU8pzo4cD4tLThC5-Kb1Ufc1l8RGRfbI6dbdyBiuJfrJbasJoTduKrFYZgpihDvTxkG5kGeNJQNt3R3Zak6S_dbKUNC783CX8q4ujI3w5bO-Y0vmTl1PE7hBzKPoqJpLG4dS1CcEKNe7BB4QgreCPdGUJs5RzrintQwVlCzTXj3o68ZOr2rSPVrRssDkpQam_YQs1KvRsl8MHMBSf0rshEQLlfCo-cEZKxUUl4b9GIj4VSxHaJIh2hzJtBMcQFCsHdL9nktl0KIq5_htNKrxMwuddImwqIdWeIosQUW79XRLwx0GoQ2yZsNgf-Y64kdg46Z1589tk_MsTmlukldgzCo2fN6EFmOg2SiAUvM2H8en5NPvWp00al3f940BdSXLyRHOYNiT2igbVQpdxElQNV4vPlyqL-Lv7iCJIKM7GWVDghdPVuPpv-a8TRuCLuL2tA1lqFNla_KJ3uJtj2nAQdcFTIYkUdtGKkEJdZybagmW8azNsBcAZNbnVsyYGQkh7Ycw=w769-h1024-s-no?authuser=0",
          source: "https://raw.githubusercontent.com/beroral21/berat.21/main/mp3indirdur-Cem-Adrian-Kul-ft-Mark-Eliyahu.mp3",
          url: "https://www.youtube.com/watch?v=gdFVBaZ3EXo",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
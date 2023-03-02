import Head from 'next/head';

const HtmlHead = ({pageTitle}) => {

    return (
        <Head>
            <title>{pageTitle}</title>
            {/* TYPEKIT */}
            {/* <link rel="stylesheet" href="https://use.typekit.net/wbg6nwl.css" /> */}
            <link rel="stylesheet" href="https://use.typekit.net/ypw2dwr.css" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />

            {/* DESCRIPTION / KEYWORDS */}
            <meta
                name="description"
                content="Kabeljau&amp;Dorsch – Label für junge Literaturvermittlung"
            />
            <meta name="keywords" content="Kabeljau, Dorsch, Literatur, Literaturvermittlung, Lesungen, Lesereihe, Unabhängige Lesereihen, Autorenlesung, Literaturshow, Literaturpodcast, Literaturveranstaltungen, junge Literatur, Berlin, Neukölln" />
            
            {/* FAVICON */}
            <link rel="apple-touch-icon" sizes="57x57" href="../assets/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="../assets/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="../assets/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="../assets/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="../assets/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="../assets/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="../assets/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="../assets/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="../assets/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="../assets/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="../assets/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="../assets/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="../assets/favicon/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            
            {/* TWITTER & FB THUMBNAILS */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content="Kabeljau&amp;Dorsch – Label für junge Literaturvermittlung" />
            {/* CHANGE URL BEFORE GOING LIVE */}
            {/* <meta property="og:image" content="https://kabeljau-und-dorsch.de/assets/thumbnail.png" /> */}
            <meta property="og:image" content="https://kabeljau-und-dorsch.de/assets/thumbnail2.png" />
            <meta property="og:url" content="https://kabeljau-und-dorsch.de" />

            <meta name="twitter:card" content="summary_large_image" />
    
        </Head>
    )
}

export default HtmlHead;
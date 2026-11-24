import Script from "next/script";

export default function Head() {
    const analyticsScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;

    return (
        <>
            <title>Ching Lam Lau</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            {analyticsScriptUrl && (
                <Script
                    src={analyticsScriptUrl}
                    data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
                    strategy="lazyOnload"
                />
            )}
        </>
    )
}

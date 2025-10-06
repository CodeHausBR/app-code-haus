import { useEffect } from "react";

export function usePageMeta({ title, description, image }: { title: string; description: string; image?: string }) {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        const desc = document.querySelector('meta[name="description"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const twitterCard = document.querySelector('meta[name="twitter:card"]');

        if (desc) desc.setAttribute('content', description);
        if (ogDesc) ogDesc.setAttribute('content', description);
        if (ogTitle) ogTitle.setAttribute('content', title);
        if (ogImage && image) ogImage.setAttribute('content', image);
        if (twitterCard && image) twitterCard.setAttribute('content', 'summary_large_image');

        return () => {
            document.title = prevTitle;
        };
    }, [title, description, image]);
}

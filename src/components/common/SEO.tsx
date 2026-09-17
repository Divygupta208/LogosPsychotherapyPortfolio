import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    url: string;
}

const SEO = ({ title, description, url }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <link rel="canonical" href={url} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
};

export default SEO;
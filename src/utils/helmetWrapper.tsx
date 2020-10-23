import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { IHelmet } from 'types/index';

const SEO = ({ title, description, image, article }: IHelmet) => {
  const { pathname } = useLocation();
  const siteName = 'Site Name';
  const siteUrl = 'http://page.com';
  const twitterUsername = '@name';

  const titleTemplate = title + ' - ' + siteName;
  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      {description && <meta name="description" content={description} />}

      {url && <meta property="og:url" content={url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;

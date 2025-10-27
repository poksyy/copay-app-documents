import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// A simple landing page that points directly to the backend and frontend documentation.
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main style={{ padding: '4rem 0', textAlign: 'center' }}>
        {/* Larger heading and subtitle for a bolder appearance */}
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{siteConfig.title}</h1>
        <p style={{ fontSize: '1.25rem', marginTop: '0' }}>{siteConfig.tagline}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              padding: '2rem',
              maxWidth: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Backend</h2>
            <p>API and services guide for the project.</p>
            <Link
              className="button button--secondary button--lg copay-btn"
              to="/docs/category/backend"
            >
              Backend Docs
            </Link>
          </div>
          <div
            style={{
              border: '1px solid #eaeaea',
              borderRadius: '8px',
              padding: '2rem',
              maxWidth: '350px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Frontend</h2>
            <p>User interface and client development guide.</p>
            <Link
              className="button button--secondary button--lg copay-btn"
              to="/docs/category/frontend"
            >
              Frontend Docs
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
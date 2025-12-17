import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{ fontSize: '4rem', margin: '0', color: '#333' }}>404</h1>
          <p style={{ fontSize: '1.2rem', margin: '20px 0', color: '#666' }}>Page not found</p>
          <Link href="/" style={{ 
            color: '#0070f3', 
            textDecoration: 'none',
            padding: '10px 20px',
            border: '1px solid #0070f3',
            borderRadius: '5px',
            transition: 'all 0.2s'
          }}>
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}

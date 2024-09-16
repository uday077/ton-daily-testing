export async function generateMetadata({ params }, parent) {
  const product = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`).then((res) => res.json())
  
  return{
    title: product?.data.title,
    openGraph: {
      images: `https://backapi.bitcoinworld.news/api/media/${product?.data.blog_img}`
    }
  }
}

export default function Layout({children}) {
  return (
    <> 
      {children}
    </>
  );
}

---
title: "ContentFull platform"
date: "October 17, 2021"
excerpt: "Launch faster with a modern content platform"
cover_image: "https://th.bing.com/th/id/OIP.8kBLN6u-1pzDfk6QU63RmgHaE7?pid=ImgDet&rs=1"
---

# what is the Contentful

its the easiest,fastest way to manage content, integrate your tools, publish across channels, Unblock your team with our industry-leading app framework

### install nextjs application

> npx create-next-app contentful

# Contentful Models

first thing go to conentful website and create new account . and create new space , and create new fields

### available filed in contentful models

- Rich text field 'text formatting with reference and media'
- text field 'Title,names paragraphs,list of names'
- number field 'Id,order number,rating quantity'
- date and time field 'Event dates'
- location field 'Coordinates latitude and longitude'
- media 'images ,videos PDF,and other files'
- Boolean field 'yeas or no, 1 or 0 true or false'
- JSON object 'Data in json format'
- Reference field 'For example a blog post can reference its authors'

# Contentful Client

to work with the contentful in nextjs you need install contentful package

> npm i contentful

## setup contentful and grab data

```js
import { createClient } from "contentfull";
export async function getStaticProps() {
  const client = createClient({
    space: "put key",
    accessToken: "put token here",
  });
  const res = await client.getEntries({ content_type: "name of space" });

  return {
    props: {
      recipes: res.items,
    },
  };
}

export default function Recipes({ recipes }) {
  return <div>Recipe List</div>;
}
```

# Outputting post Data

list all posts

```js
export default function Recipes({recipes}){
    return(
        <div>
          {posts.map(post=>(
              <div key={post.sys.id} >{post.fields.title}</div>
            //   or
            <postCard key={post.sys.id} post={post} />
          ))}
        </div>
    )
}

// post card component
export default function PostCard({post}){
    const {title,slug,body,thumbnail}=post.fields
  return (
      <div className='card'>
         <div className='card-image'>image</div>
         <div className='card-content'>
            <div className='card-info'>
               <h4>{title}</h4>
               <p>{body}</p>
            </div>
            <div className='card-action'>
              <Link href={`/posts/${slug}`}>
                <a>read more</a>
              </Link>
            </div>

         </div>
      </div>
  )
}

```

# using images from contentful

you need setup the image domes in nextconfig.js file

```js
*nextconfig.js*
modules.exports={
    images:{
        domains:['images.ctfassets.net]
    }
}
```

display image

```js
<Image
  src={`https://${thumbnail.file.url}`}
  width={thumbnail.fields.file.details.image.width}
  height={thumbnail.fields.file.details.image.height}
/>
```

# Generating paths (Details pages)

create slug file in post folder with [slug].js

```js
import { createClient } from "contentfull";
 const client = createClient({
    space: "put key",
    accessToken: "put token here",
  });

//   create get path function to get single post
export const getStaticPaths=async ()=>{
    const res=await client.getEntries({ content_type:'post'})

    // create path to each post
    const paths=res.items.map(item=>{
        return{
            params:{slug: item.fields.slug}
        }
    })
    return {paths,
    fallback:false // return 404 page if not post fount

    }
}

// create get static props function to get post with that slug
export async function getStaticProps({params}){
    const {items}=await client.getEntries({
        content_type:'post',
        'fields.slug':params.slug
    })

    return {
        props:{post:items[0]}
    }

}
export default function postDetails({post}){
    console.log(post)
    return (

    )
}
```

# Rich text content

to display content without html tags you need to install the following package

> npm i @contentful/rich-text-react-renderer

```js
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export default function postDetails({ post }) {
  const { title, method, postImage } = post.fields;
  return (
    <div>
      <div>
        <Image />
        <h2>{title}</h2>
      </div>
      <div className="info">
        <div>{documentToReactComponents(method)}</div>
      </div>
    </div>
  );
}
```

## Incremental static Regeneration


## fallback pages


## conditional Redirects


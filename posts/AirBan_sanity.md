# build an AirBab clone with structured content using Sanity.io and next.js

## Tools

1. Sanity.io
2. next.js

# task one

- sig in into Sanity.io website
- install command interface for Sanity.io
  > npm install -g @sanity/cli
- create new sanity app with the following
  > sanity init
- start sanity project
  > sanity start

# task tow

## create project schema

create property.js file in sanity project

```js
export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "propertyType",
      title: "PropertyType",
      type: "string",
      options: {
        list: [
          { title: "Hose", value: "hose" },
          { title: "Flat", value: "flat" },
          { title: "Bed and Breakfast", value: "bed-and-breakfast" },
        ],
        layout: "radio",
      },
    },
    {
      name: "mainImage",
      title: "MainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "price",
      title: "price",
      type: "number",
    },
    {
      name: "beds",
      title: "Beds",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "host",
      title: "Host",
      type: "host",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of:[{ type:'reviews'}]
    },
  ],
};

// create image type schema
export default {
    name:'propertyImage',
    title:'Property Image',
    type:'image',
    fields:[
        {
            name:'caption',
            title:'Caption',
            type: 'string',
            options:{
                isHightLight:true
            }
        }
    ],
    options:{
        hotspot:true
    }
}

// create reviews type schema
export default {
    name:'review',
    title:'Review',
    type:'object',
    fields:[
        {
            name:'reviewsDescription',
            title:'Reviews Description',
            type:'string'
        },
        {
            name:'traveller',
            title:'Traveller',
            type:'traveller'
        },
        {
            name:'rating',
            title:'Rating',
            type:'string',
            options:[
                list:[
                    {title:'5 Stars',value:'5-stars'},
                    {title:'4 Stars',value:'4-stars'},
                    {title:'3 Stars',value:'3-stars'},
                    {title:'2 Stars',value:'2-stars'},
                    {title:'1 Stars',value:'1-stars'},
                ]
            ],
            layout:'radio'
        },
    ]
}

//  create the traveller type schema
export default {
    name:'traveller',
    title:'Traveller',
    type:'reference',
    to:[{ type:'person'}]
}
//  create the person schema
export default {
    name:'person',
    title:'Person',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            description:'Please use "FirstName LastName " format  '
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
           options:{
               source:'name',
               maxLength:100
           },
        },
           {
            name:'id',
            title:'ID',
            type:'number',

        },
           {
            name:'image',
            title:'image',
            type:'image',

        },
    ]
}

// create the host schema
export default{
    name:'host',
    title:'Host',
    type:'reference',
    to:[{ type:'person'}]

}
// after than import the files in schema.js
```

after that go to schema.js file and import the property.js file

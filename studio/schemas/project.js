export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'imageP',
            title: 'Image Reference',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "personal"},
                    {value: "client", title: "client"},
                    {value: "school", title: "school"},
                    {value: "company", title: "company"},
                 ]
            }
        },
        {
            name: "link",
            type: "url"
        },
        {
            name: "repository",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags"
            }
        }

    ],
}
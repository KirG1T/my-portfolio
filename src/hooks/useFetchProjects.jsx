import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
    space: 'l64s4pu7wcbd',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
    const [projects, setProjects] = useState([]);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'portfolio' });
            const projects = response.items.map((item) => {
                const { title, url, image, github } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return { title, url, id, img, github };
            });
            setProjects(projects);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return { projects };
};

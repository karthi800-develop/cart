import axios from 'axios';


const baseURL = 'https://myapi.srkits.in';


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjI0OTE3NjUsImV4cCI6MTcyMjQ5NTM2NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Im1kQHNya2l0c29sdXRpb25zLmNvbSJ9.Vlrx5f5pIOesaJ4OzxZbabMo07IbviEJxZ6H-N5rmBuVjJL7wPkFQ16-3Ln9Ssuq-cQNqzkxbKzdyYhzL6hhhFjd5HSprFIGu5PJzrXhJZeRS6OQ-473WH_KZ6FqpAeBeQEskTQf7XcLm32o7GrF_jdNvG4D11Yfa3itld9k29A4QwQsTmP7ZR9cWEvncsYN74GRbgUHpAX9xz9Iz79e5L4wyQvnJnOuxdqDQT5RN_ivvSzcBXBFH40rxEowU-NdHENuK6Lo7RqdagzBwHcZBLXRyM4aybO2PH7vA6TedUH7ZdKrRVWfdqDyqYHT9TiSPHkd1i5mS4Pdm7hmCn0NGMx6kfdbmcJMBI6UvTvtaPZqRKFn9DzgtlJtm7rKyZDF6ugR9yyUEBHn0WT6Rm-wcq14UiBIewxcug-8OsbexwiY7HgAvrQ9dG-BrEywNadhGnizlB2F5IE94VAsmUxUYHF12wD58T5dRQWcVTSYtm5jShoRuwWoKD4f7rKzDcVX6fXj1ab4jSrTAyBzAWPJR9ryyC9Fe0EfPJKp8fivmMUN03DvQUnKzXMNDUElSAxr7LcjWxDZHiYh8yewNN4SdNWl-XVLr03aTnR-pip0Io8Jx_cwDtrKK5uhqHqHqEsLYSbVHXiyuTquknVjYzBvsiXotpHJiRMgwIg6Hzo2iNg'

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/ld+json',
  }
});


// export async function getCategory (data) {
//     try {
  
//       const response = await api.get(`/api/categories`);
  
//       if(response.status !== 200){
  
//         throw new Error('Failed to fetch data');
//       }
  
//       console.log(response.data['hydra:member'])
  
//       let datas =  response.data['hydra:member'].map((item)=>({
  
//         id: item.id,
//         category: item.category,
//         slug: item.slug,
//         metaTitle: item.metaTitle,
//         metaDescription: item.metaDescription,
//         photo: item.photo,
//         photow: item.photow,
//         photoh: item.photoh,
//         status: item.status,
  
//       })); 

//       data(datas)
  
//     } catch (error) {
//       console.error('Error fetching welcome content:', error);
//       throw error;
//     }
//   };
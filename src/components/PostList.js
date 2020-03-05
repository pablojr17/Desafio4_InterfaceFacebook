import React, { Component } from "react";
import PostItem from './PostItem';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Pablo Gomes',
          avatar: 'https://avatars1.githubusercontent.com/u/47211806?s=460&v=4'
        },
        date: '04 Mar de 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Mar de 2020',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          },
          {
            id: 1,
              author: {
                name: 'Pablo Gomes',
                avatar: 'https://avatars1.githubusercontent.com/u/47211806?s=460&v=4'
              },
              content: 'Que massa Diego, já já te chamo Diego',
          },
          {
          id: 3,
            author: {
                name: 'Mayk Brito',
                avatar: 'https://avatars3.githubusercontent.com/u/6643122?s=460&v=4'
              },
              content: 'Pablão, temos uma vaga aqui que se encaixa com seu perfil brother',
          }
        ]
      },
      {
        id: 1,
        author: {
          name: 'Pablo Gomes',
          avatar: 'https://avatars1.githubusercontent.com/u/47211806?s=460&v=4'
        },
        date: '04 Mar de 2020',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo um divisor de aguas na minha vida! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Rennan Douglas',
            avatar: 'https://avatars3.githubusercontent.com/u/15038553?s=460&v=4'
          },
            date: '04 Mar de 2020',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'João Inácio Neto',
              avatar: 'https://avatars3.githubusercontent.com/u/22185823?s=460&v=4'
            },
            date: '04 Mar de 2020',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          },
          {
            id: 6,
            author: {
              name: 'Mailson Garcia',
              avatar: 'https://avatars3.githubusercontent.com/u/50223904?s=460&v=4'
          },
            date: '04 Mar de 2020',
            content:
              'Também estou fazendo! Logo nos primeiros dias já consegui um emprego com React, tô felizão! Continua, é muito bom!'
          },
        ]
      },
    ]
  };

render() {
  const { posts } = this.state;

  return (
    <div className="postlist">
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
}
export default PostList;
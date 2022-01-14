import React from 'react';
import {
    FaBehance,
    FaFacebook,
    FaTelegram,
    FaWhatsappSquare
  } from 'react-icons/fa';
  import {AiFillTwitterCircle , AiFillInstagram} from 'react-icons/ai'
  import {SiYoutubemusic} from 'react-icons/si'



export const social = [
    {
      id: 1,
      url: 'https://www.facebook.com',
      img: <FaFacebook/>
    },
    {
      id: 2,
      url: 'https://www.twitter.com',
      img: <AiFillTwitterCircle/>
    },
    {
      id: 3,
      url: 'https://www.youtube.com',
      img: <SiYoutubemusic/>
    },
    {
      id: 4,
      url: 'https://www.instagram.com',
      img: <AiFillInstagram/>
    },
    {
      id: 5,
      url: 'https://www.twitter.com',
      img: <FaWhatsappSquare/>
    },
    {
        id: 6,
        url: 'https://www.twitter.com',
        img: <FaTelegram/>
      },
      
  ];

  export const noticiasNac = [
    {
      id: 'not1',
      categoria: 'Nacional',
      destacado: false,
      titulo: 'Descubrimiento en el caso Jason' ,
      subtitulo: 'En la casa del asesino encontraron nuevas pistas sobre la mujer',
      img: 'https://images.pexels.com/photos/10464480/pexels-photo-10464480.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' ,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id:'not2',
      categoria: 'Nacional',
      destacado: true,
      titulo:'Marcha por el aumento del boleto estudiantil',
      subtitulo: 'Estudiantes de todo el pais salieron esta tarde a reclamar',
      img: 'https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      texto: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    }
  ] ;

  export const noticiasInter = [
    {
      id: 'inter1',
      categoria: 'Internacional',
      destacado: true,
      titulo: 'OEA condena con 26 votos el arresto de opositores y exige su liberacion inmediata',
      subtitulo:'La organizacion condeno firmemente la persecusion politica y manifesto lo siguiente',
      img: 'https://images.pexels.com/photos/2872418/pexels-photo-2872418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      texto: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
  ];

  export const noticiasSport = [
    {
      id: 'sport1',
      categoria: 'Deportes',
      destacado: false,
      titulo: 'Inicia el campeonato de Sky de Aspen',
      subtitulo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img:'https://images.pexels.com/photos/8161998/pexels-photo-8161998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 'sport2',
      categoria: 'Deportes',
      destacado: true,
      titulo: 'El abierto de Francia termina este viernes, con Amstrong como favorito',
      subtitulo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

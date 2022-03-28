import { useEffect, useState } from "react";
import axios from 'axios';

const useRequestData = (InitialData, url) => {
    const [data, setData] = useState(InitialData)

    useEffect(() => {
        console.log(url);
        axios.get(url , {
            headers: {
                'Content-type': 'text/html'
            }
          })
        .then((response) => {
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [url])
    
    return (
        //data.items
    
        [{
          "kind": "youtube#searchResult",
          "etag": "AxBSedJczWdjWTufjkz0g3bkI-g",
          "id": {
            "kind": "youtube#video",
            "videoId": "-66gfh99HWQ"
          },
          "snippet": {
            "publishedAt": "2018-07-18T22:00:02Z",
            "channelId": "UCffDXn7ycAzwL2LDlbyWOTw",
            "title": "MC Pedrinho feat DJ Kalfani - Amor (kondzilla.com)",
            "description": "Acesse o Portal KondZilla https://kondzilla.com Inscreva-se no Favela Venceu by KondZilla: https://goo.gl/a7Tt6X OUÇA NOSSOS ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/-66gfh99HWQ/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/-66gfh99HWQ/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/-66gfh99HWQ/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Canal KondZilla",
            "liveBroadcastContent": "none",
            "publishTime": "2018-07-18T22:00:02Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "uiSOTzFITxlPNjYbF37Dyb57MlY",
          "id": {
            "kind": "youtube#video",
            "videoId": "tk0AT9vQiys"
          },
          "snippet": {
            "publishedAt": "2022-02-17T21:29:24Z",
            "channelId": "UCNUQK9mQoqi4yNXw2_Rj6SA",
            "title": "Gaab e MC Davi - Amor e Amor (GR6 Explode) DJ Perera",
            "description": "Siga nosso novo Instagram: @gr6explodeoriginal Artista: Gaab e MC Davi Musica: Amor e Amor Produção: DJ Perera e Gaab ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/tk0AT9vQiys/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/tk0AT9vQiys/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/tk0AT9vQiys/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "GR6 EXPLODE",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-17T21:29:24Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "_iHl5dIEzmEP7d8Lzm8z_x_6jyg",
          "id": {
            "kind": "youtube#video",
            "videoId": "UI_VjxVrzHY"
          },
          "snippet": {
            "publishedAt": "2021-07-30T15:00:10Z",
            "channelId": "UCeADKVHolNIaMnkA8I-dmAg",
            "title": "Brisa Star e Zé Vaqueiro - Cena de Amor (Videoclipe Oficial)",
            "description": "Clipe oficial da música \"Cena de Amor\" CENA DE AMOR Letra : Juninho Pirado Quando o seu olhar cruzou com o meu olhar ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/UI_VjxVrzHY/default.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/UI_VjxVrzHY/mqdefault.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/UI_VjxVrzHY/hqdefault.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "BRISA STAR  OFICIAL",
            "liveBroadcastContent": "none",
            "publishTime": "2021-07-30T15:00:10Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "ie9-sq_0HjCL2tgWVtug200iC8M",
          "id": {
            "kind": "youtube#video",
            "videoId": "dZ70fTlRG4Q"
          },
          "snippet": {
            "publishedAt": "2022-03-24T16:31:49Z",
            "channelId": "UC8PS8EsZsWXOQ1YmlJwCaYw",
            "title": "O AMOR VIVE - ARAUTOS DO REI",
            "description": "Música Tema Oficial da #SemanaSanta 2022 Você também pode ouvir a música nas principais plataformas digitais. (Link em ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/dZ70fTlRG4Q/default_live.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/dZ70fTlRG4Q/mqdefault_live.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/dZ70fTlRG4Q/hqdefault_live.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "Feliz7Play",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2022-03-24T16:31:49Z"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "hQ3ZYlFN6FdrVAtILyIlM1hr4QI",
          "id": {
            "kind": "youtube#video",
            "videoId": "7eLEV-axsxw"
          },
          "snippet": {
            "publishedAt": "2022-03-16T17:47:06Z",
            "channelId": "UCTlqNHmHCDSqaxPDNqFS-fA",
            "title": "AULA 1 - APRESENTAÇÃO DO RAIO X DO AMOR",
            "description": "Para que você não perca nenhum conteúdo, se inscreva no nosso canal e comece a nos seguir nas redes sociais. Instagram ...",
            "thumbnails": {
              "default": {
                "url": "https://i.ytimg.com/vi/7eLEV-axsxw/default_live.jpg",
                "width": 120,
                "height": 90
              },
              "medium": {
                "url": "https://i.ytimg.com/vi/7eLEV-axsxw/mqdefault_live.jpg",
                "width": 320,
                "height": 180
              },
              "high": {
                "url": "https://i.ytimg.com/vi/7eLEV-axsxw/hqdefault_live.jpg",
                "width": 480,
                "height": 360
              }
            },
            "channelTitle": "O Corpo Explica",
            "liveBroadcastContent": "upcoming",
            "publishTime": "2022-03-16T17:47:06Z"
          }
        }]
    )

}

export default useRequestData;
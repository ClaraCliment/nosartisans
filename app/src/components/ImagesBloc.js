import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImagesBloc() {
  return (
    <ImageList sx={{ width: "100%", height: "150" }} cols={3} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://picsum.photos/id/527/400/400',
    title: 'Travail du cuir',
  },
  {
    img: 'https://picsum.photos/id/531/400/400',
    title: 'Réparation',
  },
  {
    img: 'https://picsum.photos/id/534/400/400',
    title: 'Arts graphiques',
  },
];

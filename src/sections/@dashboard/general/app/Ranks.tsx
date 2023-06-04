// React
import React, {useState} from 'react';
// @mui
import { Box, Button, Card, CardHeader, Stack, CardProps } from '@mui/material';
// redux
import { useDispatch } from 'react-redux';
import { changeButtonTitle } from '../../../../redux/slices/bigcatebutton';
//
import Image from '../../../../components/image';
import Scrollbar from '../../../../components/scrollbar';
// ----------------------------------------------------------------------

type ItemProps = {
  id: number;
  name: string;
  image: string;
};

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: ItemProps[];
}

export default function Ranks({ title, subheader, list, ...other }: Props) {
  
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 7, pr: 0 }}>
          {list.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ProductItemProps = {
  product: ItemProps;
};

function ProductItem({ product }: ProductItemProps) {

  const dispatch = useDispatch();

  const { name, image } = product;
  const [buttonTitle, setButtonTitle] = useState<string | null>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const title = e.currentTarget.textContent;
    setButtonTitle(title);
    dispatch(changeButtonTitle(title));
  }

  console.log("buttonTitle : ",buttonTitle);

  return (
    <Stack direction="row" spacing={2}>
      <Image
        alt={name}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ flexGrow: 1, minWidth: 200 }}>
        <Button sx={{ color: 'text.primary', typography: 'subtitle2'}} onClick={handleClick}>{name}</Button>
      </Box>
    </Stack>
  );
}

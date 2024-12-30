'use client';

import {
  Grid,
  Card,
  Container,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useProducts } from '@/hooks/useProducts';

const ProductList = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {products?.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product._id}
            onClick={() => console.log(product._id)}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography>€{product.price}</Typography>
                <Typography>Lager: {product.stockQuantity}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductList;

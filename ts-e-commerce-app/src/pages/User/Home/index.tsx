import { Box, Grid, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import Advertisement from "../../../content/Advertisement";
import CategoryCard from "../../../components/CategoryCard";
import ProductItemCard from "../../../components/ProductItemCard";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCategory } from "../../../features/Category/categoryAction";

type categorytype = {
  uuid: string;
  categoryName: string;
  categoryImage: string[];
  subCategories: string[];
};


const Home = () => {

  const dispatch = useAppDispatch()

  const categories = useAppSelector((state) => state?.category?.content)
  const loading = useAppSelector((state) => state?.category?.isLoading)

  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])


  

  return (
    <Box>
      <Box>
        <Advertisement />
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        sx={{ m: "20px 200px 20px 200px" }}
        gap={5}
      >
        {
        loading && <Skeleton animation="wave" variant="rectangular" width={148} height={50} />
        }
        {
          categories && categories.length > 0 &&
          categories?.map((i) => {
            return(
              <CategoryCard items={i} />
            )
          })
        }
      </Box>

      <Box sx={{m: '20px 200px 20px 200px'}}>
        <Grid container gap={4}>
          <ProductItemCard />
          <ProductItemCard />
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

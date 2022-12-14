import { Grid, GridItem } from "@chakra-ui/react";
import { Card } from "../../components";

export function CardList(props) {
  return (
    <Grid
      // Responsive grid yapısı
      templateColumns={{
        base: "repeat(auto-fill, minmax(230px, 1fr))",
        sm: "repeat(auto-fill, minmax(300px, 1fr))",
      }}
      gap={6}
      {...props}
    >
      {props.data?.map((post) => {
        return (
          <GridItem key={post.id}>
            <Card post={post} />
          </GridItem>
        );
      })}
    </Grid>
  );
}

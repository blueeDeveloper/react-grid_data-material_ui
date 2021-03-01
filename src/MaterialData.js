import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

const OrderSortingGrid = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 400,
    maxColumns: 9,
  });

  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        sortingOrder={["desc", "asc"]}
        sortModel={[
          {
            field: "commodity",
            sort: "asc",
          },
        ]}
        {...data}
      />
    </div>
  );
};

export default OrderSortingGrid;

import { EntityAutocompletePicker } from '@backstage/plugin-catalog-react';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BusinessAreaFilter } from './BusinessAreaFilter';
import { CustomFilters } from '../CustomFilters';

/** @public */
export type BusinessAreaPickerProps = {
  showCounts?: boolean;
};

const useStyles = makeStyles(
  { input: {} },
  { name: 'CatalogReactEntityTagPicker' },
);

/** @public */
export const BusinessAreaPicker = (props: BusinessAreaPickerProps) => {
  const classes = useStyles();

  return (
    <EntityAutocompletePicker<CustomFilters>
      label="Business Area"
      name="businessAreas"
      path="metadata.businessAreas"
      Filter={BusinessAreaFilter}
      showCounts={props.showCounts}
      InputProps={{ className: classes.input }}
    />
  );
};
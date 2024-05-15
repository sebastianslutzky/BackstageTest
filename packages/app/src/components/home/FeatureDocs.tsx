import React, { ComponentType, PropsWithChildren } from 'react';
import { wrapInTestApp, TestApiProvider } from '@backstage/test-utils';
import { catalogApiRef, entityRouteRef } from '@backstage/plugin-catalog-react';
import Grid from '@material-ui/core/Grid';
import { FeaturedDocsCard } from '@backstage/plugin-home';

const docsEntities = [
  {
    apiVersion: '1',
    kind: 'Location',
    metadata: {
      name: 'getting-started-with-backstage',
      title: 'Getting Started Docs',
      description:
        'An awesome doc you want to feature to help out your customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium magna ut molestie lacinia. Nullam eget bibendum est, vitae finibus neque.',
    },
    spec: {
      type: 'documentation',
    },
  },
];

const mockCatalogApi = {
  getEntities: async () => ({ items: docsEntities }),
};

export default {
  title: 'Plugins/Home/Components/FeaturedDocsCard',
  decorators: [
    (Story: ComponentType<PropsWithChildren<{}>>) =>
      wrapInTestApp(
        <TestApiProvider apis={[[catalogApiRef, mockCatalogApi]]}>
          <Story />
        </TestApiProvider>,
        {
          mountedRoutes: {
            '/catalog/:namespace/:kind/:name': entityRouteRef,
          },
        },
      ),
  ],
};

export const FeaturedDocs = () => {
  return (
    <Grid item xs={12} md={6}>
      <FeaturedDocsCard
        title='Highlights'
        filter={{
          'spec.type': 'documentation',
          'metadata.name': 'getting-started-with-backstage',
        }}
      />
    </Grid>
  );
};
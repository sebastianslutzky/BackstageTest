import { Page, Content } from '@backstage/core-components';
import {
  HomePageCompanyLogo,
  TemplateBackstageLogo,
  HomePageStarredEntities,
  HomePageToolkit,
  HomePageTopVisited,
  HomePageRecentlyVisited,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { tools, useLogoStyles } from './shared';
import { FeaturedDocs } from './FeatureDocs';
import { AnnouncementsCard, NewAnnouncementBanner } from '@procore-oss/backstage-plugin-announcements';

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const { svg, path, container } = useLogoStyles();

  const banner = (
        <Grid container>
          <Grid item md={12}>
            <NewAnnouncementBanner />
          </Grid>
        </Grid>
  );


  const test =(
          <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid >
            Left Side (50%)
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2} >
            <Grid item xs>
                Right Side - Row 1
            </Grid>
            <Grid item xs>
                Right Side - Row 2
            </Grid>
            <Grid item xs>
                Right Side - Row 3
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );

  const header = (
          <Grid container justifyContent="center" spacing={2}>
            <HomePageCompanyLogo
              className={container}
              logo={<TemplateBackstageLogo classes={{ svg, path }} />}
            />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar
                InputProps={{
                  classes: {
                    root: classes.searchBarInput,
                    notchedOutline: classes.searchBarOutline,
                  },
                }}
                placeholder= "Search"
              />

            </Grid>
          </Grid>
  );


  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content >
          {banner}
          {header}
            <Grid container>
              <Grid item md={6}>
                <AnnouncementsCard max={6} />
              </Grid>
               <Grid item  md={6}>
                  <Grid container direction='column' >
                  <Grid item  >
                    <HomePageToolkit title='Useful Links' tools={tools} />
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={6} md={4}>
                      <HomePageTopVisited />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <HomePageRecentlyVisited />
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <HomePageStarredEntities />
                    </Grid>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid> 
              {/* <Grid item  md={6}>
                <Grid item  >
                  <HomePageToolkit title='Useful Links' tools={tools} />
                </Grid>
                <Grid container  xs={12} >
                  <Grid item xs={6} md={4}>
                    <HomePageTopVisited />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <HomePageRecentlyVisited />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <HomePageStarredEntities />
                  </Grid>
                </Grid>
              </Grid> */}
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
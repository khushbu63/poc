import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core'
import style from './Styles';
class Layout extends React.Component<{}, {}>{
  render() {
    const renderContainer = () => (
      <Grid container
        direction="row"
        justify="center"
        alignItems="center" >
        <Grid item sm={12} md={7} lg={7} >

        </Grid>
      </Grid>
    )
    return (
      <div>
        {renderContainer()}
      </div>
    )
  }
}
export default withStyles(style)(Layout);
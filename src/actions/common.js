import request from 'api/request';
import { getActionType } from 'actions/utils';

const prefix = 'action.common';

export const FETCHING_SERVER = getActionType(prefix)('FETCHING_SERVER');
export const fetchingServer = isFetching => ({
  type: FETCHING_SERVER,
  isFetching
});

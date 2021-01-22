//auth types
export const REGISTER = 'register';
export const LOGIN = 'login';
export const USER_LOADED = 'user_loaded'
export const CHANGE_USERDATA = 'change_user_data';
export const CHANGE_AVATAR = 'change_avatar'
export const CHANGE_LOADED = 'change_loaded'
//auth errors
export const AUTH_ERROR ='auth_error';
/////////////////////////////


//USERES
export const ALL_USERS = 'users';
export const GET_EMPLOYE = 'get_users';
export const CHANGE_PERMISSION = 'change_permission';
export const ONE_USER = 'get_one'

//user errors
export const USER_ERR = 'get_all_users_error'

//PROJECTS
export const EDIT_PROJECT = 'edit_project';
export const ALL_PROJECTS = 'all_projects';
export const GET_PROJECT = 'get_project';
export const CREATE_SPRINT = 'create_sprint';
export const UPDATE_PROJECT = 'project_updated';
export const PROJECT_ID = 'project_updated';
export const DELETE_PROJECT = 'delete_project'
export const FINISH_PROJECT = 'finish_project'
    //sprints
export const ADD_SPRINT = 'crate_new_sprint';
export const ADD_INFO_SPRINT = 'add_info_sprint'
export const GET_SPRINT = 'get_sprint';
export const ADD_TASKS = 'add_tasks_to_sprint';
export const FINISH_TASK = 'finish_task'
export const SPRINT_ERROR = 'sprint_error';
export const ALL_SPRINT = 'get_project_sprints'
export const FINISH_SPRINT = 'finish_sprint' 
export const ADD_SPRINT_TO_CHOSEN = 'add_sprint_to_chosen' 
//teams
export const JOIN_TEAM = 'join_to_team'
//projects errors
export const CREATE_FAIL= 'error_on_project_create';

//news

export const ALL_NEWS = 'all_news'
export const GET_NEWS = 'get_news'
export const DELETE_NEWS = 'delete_news'
export const UPDATE_NEWS = 'update_news'
export const NEWS_FAIL = 'fail_on_news'


/////SYSTEM ADMIN
export const NEW_TICKET = 'new_ticket';
export const ALL_TICKETS = 'all_tickets';
export const GET_TICKET = 'get_ticket'
export const PERM_RETURN = 'permission_return'

///ERRORS with tickets
export const NEW_ERROR = 'server_error'



//////// proposes

export const NEW_PROPOSE = 'new_propose'
export const LIKED_PROPOSES = 'liked_proposes'
export const DATE_PROPOSES = 'date_proposes'
export const LIKE_PROPOSE = 'like_propose'
export const DELETE_PROPOSE = 'delete_propose'
export const PROPOSE_FAIL = 'propose_fail'




//error handler


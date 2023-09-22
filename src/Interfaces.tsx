/*export interface CommentModel {
  //post ID father of the comment
  postID?:number;
  //id of the comment
  id?:number;
  //author username
  name: string;
  //author email
  email?: string;
  //body of the comment
  body: string;
  //when the comment was added
  date?: Date;
  //not yet implemented... to be used to reply to other comment
  commentID?: number;
  //like counter
  likes: number;
  //avatar
  avatar: string;
}*/

export interface CommentSystemModel {
  maxlength: number;
  comment: CommentModel;
  comments: CommentModel[];
  authors: AuthorModel[];
  updateBodyValue?: (newValue: string) => void;
  addComment: (comment: CommentModel) => void;
  removeComment?: (id: number|undefined) => void;
  editComment?: (id: number) => void;
  initComments: (comments: CommentModel[]) => void;
  initAuthors: (authors: AuthorModel[]) => void;
  likeComment?: (id: number|undefined) => void;
}



/* COMMENT */

export interface CommentModel {
  id?: number
  attributes: CommentAttr
}

export interface CommentAttr {
  body: string
  likes: number
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  author: CmntAuthorModel
}

export interface CmntAuthorModel {
  data: CmntAuthorData
}

export interface CmntAuthorData {
  id: number
  attributes: CmntAuthorAttr
}

export interface CmntAuthorAttr {
  name: string
  email: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}



/* AUTHOR */

export interface AuthorModel {
  id: number
  attributes: AuthorAttr
}

export interface AuthorAttr {
  name: string
  email: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar: AuthorAvatar
}

export interface AuthorAvatar {
  data: AuthorAvatarData
}

export interface AuthorAvatarData {
  id: number
  attributes: AuthorAvatarAttr
}

export interface AuthorAvatarAttr {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}



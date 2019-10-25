export interface PhotoModel {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
    is_primary: number;
    has_comment: number;
    url: string;
    description: string;
}

export interface PhotosModel {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: PhotoModel[];
}

export interface RootObjectModel {
    photos: PhotosModel;
    stat: string;
}

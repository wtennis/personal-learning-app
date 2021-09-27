class FolderContentsController < ApplicationController

    def show
        contents = FolderContent.where(folder_id: params[:id])
        render json: contents
    end

    def create
        user = User.find_by(id: session[:user_id])
        folder = user.folders.create!(folder_params)
        nest = FolderContent.create(folder_id: params[:parent_id], contentsable_type: "Folder", contentsable_id: folder.id)
    end

    private

    def folder_params
        params.permit(:name, :emoji, :is_public)
    end



end

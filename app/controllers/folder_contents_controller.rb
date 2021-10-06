class FolderContentsController < ApplicationController

    # def show
    #     contents = FolderContent.where(folder_id: params[:id])
    #     render json: contents
    # end

    # def create
    #     user = User.find_by(id: session[:user_id])
    #     if params[:type] == "Resource"
    #         newItem = Resource.create!(resource_params)
    #     else
    #         newItem = user.folders.create!(folder_params)
    #     end
    #     nest = FolderContent.create(folder_id: params[:parent_id], contentsable_type: params[:type], contentsable_id: newItem.id)
    # end

    # private

    # def folder_params
    #     params.permit(:name, :emoji, :is_public)
    # end

    # def resource_params
    #     params.permit(:name, :emoji, :url)
    # end

end

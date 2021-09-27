class FolderContentsController < ApplicationController

    def show
        contents = FolderContent.where(folder_id: params[:id])
        render json: contents
    end

    #   def show
    #     contents = Folder.find(params[:id]).nested_contents
    #     render json: contents
    # end


end

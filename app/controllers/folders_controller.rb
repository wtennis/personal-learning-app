class FoldersController < ApplicationController
    
    def index
        user = User.find_by!(id: session[:user_id])
        items = user.folders + user.resources
        render json: items
    end

    def destroy
        folder = Folder.find_by!(id: params[:id])
        if folder
          folder.destroy_nested
        # investigate if this recursive method is best practice
          folder.folder_contents.destroy_all
          folder.destroy
          head :no_content
        else
          render json: { error: "Folder not found" }, status: :not_found
        # switch to rescue_from approach
        end
      end

    def create
        user = User.find_by(id: session[:user_id])
        folder = user.folders.create!(folder_params)
        if params[:parent_id]
          nest = FolderContent.create(folder_id: params[:parent_id], contentsable_id: folder.id, contentsable_type: "Folder")
        end
        render json: folder, status: :created
    end

    def update
      folder = Folder.find_by!(id: params[:id])
      folder.update!(update_params)
      render json: folder
    end



    private

    def folder_params
        params.permit(:name, :emoji, :is_public)
    end

    def update_params
      params.permit(:name, :note)
    end

end

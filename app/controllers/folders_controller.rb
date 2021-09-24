class FoldersController < ApplicationController
    
    def index
        top_level_folders = Folder.top_levels.where(user_id: session[:user_id])
        render json: top_level_folders
    end

    def destroy
        folder = Folder.find_by(id: params[:id])
        if folder
          folder.destroy
          head :no_content
        else
          render json: { error: "Folder not found" }, status: :not_found
        #   switch to rescue_from approach
        end
      end

end

class FoldersController < ApplicationController
    
    def index
        top_level_folders = Folder.top_levels.where(user_id: session[:user_id])
        render json: top_level_folders
    end

end

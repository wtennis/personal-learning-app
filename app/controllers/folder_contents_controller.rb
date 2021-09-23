class FolderContentsController < ApplicationController

    def show
        contents = Folder.find(params[:id]).nested_contents
        render json: contents
    end

end

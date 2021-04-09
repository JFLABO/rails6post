  def set1
    respond_to do |format|
      if @archive.update(id: params[:id],flag: 1)
        format.json { render :show, status: :ok, location: @archive }
      else
        format.json { render json: @archive.errors, status: :unprocessable_entity }
      end
    end
  end

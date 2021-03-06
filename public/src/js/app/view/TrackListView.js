import $ from 'jquery';

 export default class TrackListView {

    constructor( elem ) {

        this._elem = $(elem);
    }

    update( trackList ) {

        this._elem.html( this._template(trackList) );
    }

    _template( trackList ) {        

        return `

        <div class="row tracks">

            <h3 class=" title title--view">My Tracks</h3>

            ${ trackList.Tracks.map(track =>
            `
                <div class="col-xs-6 col-md-4 col-lg-2">
                    <div class="track">
                        <div class="track__cover-wrap">
                            <img class="track__cover openTrack" data-id="${ track.Id }" src="${ track.Image }" alt="${ track.Artist }">
    
                            ${ 
                                track.Preview ? 
                                ` 
                                <a class="track__btn-play" data-status="paused">
                                    <i class="fa fa-play" aria-hidden="true"></i>
                                </a>                                

                                ` : '' 
                            }

                        </div>

                        ${ 
                            track.Preview ? ` <audio src="${ track.Preview }" controls></audio> ` : '' 
                        }

                        <p class="track__title truncate openTrack" data-id="${ track.Id }">${ track.Name }</p>
                        <p class="track__sub-title truncate">${ track.Artist }</p>

                    </div>
                </div>

            `
            ).join('') }
            <div class="col-xs-12 col-md-4 col-md-offset-4">
                <div class="pagination">
                    <div class="pagination__number">
                        <span class="pagination__label">PAGE: </span>${ trackList.Page }
                    </div>
                    <div class="pagination__buttons">
                        <button class="pagination__btn prevPage" data-section="trackList" data-page="${ trackList.Page }">
                            <i class="fa fa-caret-left" aria-hidden="true"></i>
                        </button>
                        <button class="pagination__btn nextPage" data-section="trackList" data-page="${ trackList.Page }">
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}
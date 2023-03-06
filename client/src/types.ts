declare module 'redux' {
    export interface DefaultRootState {
      player: PlayerState;
    }
  }
  
  export interface PlayerState {
    currentSongs: any[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: any;
    genreListId: string;
  }
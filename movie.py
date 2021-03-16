from moviepy.editor import *

mp4_file = "/Hustle Harder, Hustle Smarter-Curtis 50 Cent Jackson Full Audiobook.mp4"
mp3_file = "/audio.mp3"

VideoClip = VideoFileClip(mp4_file)

AudioClip = VideoClip.audio
AudioClip.write_audiofile(mp3_file)

AudioClip.close()
VideoClip.close()

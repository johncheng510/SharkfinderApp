import time

# forming the master lists
great_white_shark = "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg"
bull_shark = "https://upload.wikimedia.org/wikipedia/commons/8/83/Carcharhinus_leucas%2C_Koh_Phangan.jpg"
tiger_shark = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Tiger_shark.jpg/1920px-Tiger_shark.jpg"
whale_shark = "https://upload.wikimedia.org/wikipedia/commons/f/f6/Similan_Dive_Center_-_great_whale_shark.jpg"
basking_shark = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cetorhinus_maximus_by_greg_skomal.JPG"
dogfish_shark = "https://upload.wikimedia.org/wikipedia/commons/0/04/Squalus_acanthias_stellwagen.jpg"

master_img_list = [great_white_shark, bull_shark, tiger_shark, whale_shark, basking_shark,dogfish_shark]


always_true = True
out_file = open("links.txt", "w")
# Clearing the out_file if previous runs filled it with data
out_file.write(str(""))
out_file.close()

try:
    temp_file = open("sharks_to_view.txt", "r")
except:
    temp_file = open("sharks_to_view.txt", "w")

while always_true is True:
    with open("sharks_to_view.txt", "r") as in_file:
        in_file.seek(0, 0)
        shark_id_list = open("sharks_to_view.txt", "r").read()
        in_file.flush()
        time.sleep(0.5)

    shark_img_list = []
    # appending the list with the correct links
    for index in range(0,6):
        if chr(49+index) in shark_id_list:
            shark_img_list.append(master_img_list[int(chr(49+index-1))])
    # debug statement
    # print(shark_id_list)
    out_file = open("links.txt", "w")
    out_file.write(str(shark_img_list))
    out_file.close()

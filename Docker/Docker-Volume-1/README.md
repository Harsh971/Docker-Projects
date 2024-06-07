# Docker Volume

```py
import os

def enter_name():
    name = input("Enter a name: ")
    with open("names.txt", "a") as file:
        file.write(name + "\n")
    print("Name added to names.txt")

def read_file():
    try:
        with open("names.txt", "r") as file:
            names = file.readlines()
            if names:
                print("Names in names.txt:")
                for name in names:
                    print(name.strip())
            else:
                print("No names found in names.txt")
    except FileNotFoundError:
        print("File not found. Creating names.txt...")
        with open("names.txt", "w") as file:
            print("names.txt created. Enter some names!")

while True:
    choice = input("Do you want to enter a name (enter 'name') or read names from the file (enter 'read')? Enter 'quit' to exit: ")
    
    if choice.lower() == 'name':
        enter_name()
    elif choice.lower() == 'read':
        read_file()
    elif choice.lower() == 'quit':
        print("Exiting the program.")
        break
    else:
        print("Invalid choice. Please enter 'name', 'read', or 'quit'.")

```

<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Volume-1/image1.png"></img>

the names.txt was inside a container and currently because the container is removed so all out data is vanished

<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Volume-1/image2.png"></img>


<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Volume-1/image3.png"></img>

## Creating Volume

```jsx
docker run -it --rm -v myvolume --name app1 a9e045c4538c
docker run -it --rm -v <VOLUMENAME> --name app1 <IMAGEID>

									OR
									
docker run -it --rm -v myvolume:/mydir/ --name app1 a9e045c4538c
docker run -it --rm -v <VOLUMENAME>:PATH --name app1 <IMAGEID>
```


<img src="https://github.com/Harsh971/Docker-Projects/blob/main/Docker/Docker-Volume-1/image4.png"></img>
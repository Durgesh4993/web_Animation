# Importing the modules
from english_words import english_words_set
from tkinter import *
import tkinter.font as font
import random
#Creating the main window and adding size, title and color
wn= Tk()
wn.geometry('600x600')
wn.title("PythonGeeks Typing Test")
wn.config(bg='LightBlue1')

#Creating a frame to show the title of the project
headingFrame1 = Frame(wn,bg="snow3",bd=5)
headingFrame1.place(relx=0.2,rely=0.2,relwidth=0.6,relheight=0.16)

headingLabel = Label(headingFrame1, text="Welcome to \n PythonGeeks Typing Test", bg='azure2',fg='black', font=('Courier',15,'bold'))
headingLabel.place(relx=0,rely=0, relwidth=1, relheight=1)

#Creating a button to start the game. The startGame function, given as command parameter, runs on clicking the button
btn = Button(wn,text="Start",bg='old lace', fg='black',width=20,height=2,command=startGame)
btn['font'] = font.Font( size=12)
btn.place(x=200,y=300)

wn.mainloop()#Runs the window till it is closed
score=0
missed=0
time=0
count=0
words=list(english_words_set)
#Creating the game window and adding size, title and color
wn= Tk()
wn.geometry('700x600')
wn.title('Typing Test By PythonGeeks')
wn.config(bg='honeydew2')
def timeFunc():
 global time,score,missed,count
 if(count<=10): # If count is less than 10, update the time
  time +=1
  timer.configure(text=time)
  timer.after(1000,timeFunc)
 else: #If count is equal to 10 then show the results, initialize the variables and destroy the other widgets
  #Label to show result after the game ends
  result= Label(wn,text='',font=('arial',25,'italic bold'),fg='grey')
  result.place(x=230,y=250)
  result.configure(text='Time taken = {} \n Score = {} \n Missed = {}'
                     .format(time,score,count-score-1))
  missed=0
  score=0
  time=0
  count=0
  nextWord.destroy()
  userInput.destroy()
  scorelabel.destroy()
  scoreboard.destroy()
  timerlabel.destroy()
  timer.destroy()
   def mainGame(event):
 global score, missed,count
 if time==0: #At the starting of the game
  random.shuffle(words) #Shuffle the list words randomly
  nextWord.configure(text=words[0]) #Show the first element of the list in the nextWord label
  userInput.delete(0,END) #clear the entry widget userInput
  timeFunc() #call the time function

 #If the enter button is pressed and it is not the start of the game
 if userInput.get()== nextWord['text']: #check if user entered correctly
  score +=1 #increment score
  scoreboard.configure(text=score) #show the new score on scoreboard
 count+=1 #Increment the count
 if(count<=10): #If count is less the 10
  random.shuffle(words) #Shuffle the list words randomly
  nextWord.configure(text=words[0])#Show the first element of the list in the    nextWord label
  userInput.delete(0,END)#clear the entry widget userInput
#Creating a label to show the name of the project
label=Label(wn,text='Typing Test By PythonGeeks',font=('arial',25,
           'italic bold'),fg='gray',width=40)
label.place(x=10,y=10)

#label to show the instruction initially and then to show the words to be typed
nextWord=Label(wn,text='Hit enter button to start and after typing the word',font=('arial',20,
            'italic bold'),fg='black')
nextWord.place(x=30,y=240)

#Label to show text ‘Your Score’
scorelabel=Label(wn,text='Your Score:',font=('arial',25,
           'italic bold'),fg='red')
scorelabel.place(x=10,y=100)

#Label to show score
scoreboard=Label(wn,text=score,font=('arial',25,
            'italic bold'),fg='blue')
scoreboard.place(x=100,y=180)
#Label to show text Time Elapsed
timerlabel=Label(wn,text='Time Elapsed:',font=('arial',25,
            'italic bold'),fg='red')
timerlabel.place(x=500,y=100)

#Label to show time
timer=Label(wn,text=time,font=('arial',25,
             'italic bold'),fg='blue')
timer.place(x=560,y=180)

#This widget takes the input from the user
userInput= Entry(wn,font=('arial',25,'italic bold'),bd=10,justify='center')
userInput.place(x=150,y=330)
userInput.focus_set()

wn.bind('<Return>',mainGame)#Runs the mainGame function every time the user presses enter button
wn.mainloop()#Runs the window till it is closed

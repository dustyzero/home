package com.iamthanosntakaholdmylimez;

import java.io.*;
import java.net.URL;
import java.util.Calendar;
import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void daepicsuperepicfilewriter_darkmode(String refferrDocs, String batTitle, String modName, String minorVer, String majorVer, Boolean betaOrNah) throws IOException {
        String fileName = "Main";
        String actualFileName;
        String actualFileName2;
        int CurrentLine = 0;
        URL folderURL = ClassLoader.getSystemResource(".");
        actualFileName = (folderURL + "out/" + fileName + ".java");
        String actualActualFileName = (removeTillWord(actualFileName, "/"));
        URL folderURL2 = ClassLoader.getSystemResource(".");
        actualFileName2 = (folderURL2 + "out/" + batTitle + ".bat");
        String actualActualFileName2 = (removeTillWord(actualFileName2, "/"));
        Scanner in = new Scanner(System.in);
        File file = new File(actualActualFileName);
        boolean result;
        try {
            result = file.createNewFile();  //creates a new file
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        FileWriter myWriter = new FileWriter(actualActualFileName);
        boolean result2;
        int NextLine = 1;
        Boolean end = false;
        String addNewLine;
        int amountOfStopLines = 0;
        int justStopped = 0;
        int timesAskSkipped = 0;
        /*if (betaOrNah) {
            toMyWriter.append("@echo off\n" +
                    "title " + modName + " (" + majorVer + "." + minorVer + "-BETA)\n" +
                    "java Main.java");
        } else {
            toMyWriter.append("@echo off\n" +
                    "title " + modName + " (" + majorVer + "." + minorVer + ")\n" +
                    "java Main.java");
        }*/
        myWriter.append("<script>\n" +
                "console.log(\"Logged for Text; Dark mode \" + $.urlParam('darkmode') + \"!\"); \n" +
                "if ($.urlParam('darkmode') == \"on\") {\n" +
                "</script>");
        while (true) {
            if(CurrentLine == 0) {
                System.out.println("Title?");
            } else if(CurrentLine == 1) {
                System.out.println("Writer?");
            } else if(CurrentLine == 2) {
                // Nothing. It's a br.
            } else {
                System.out.println("Line" + CurrentLine + "? endWrite to finish, </br> for newline.");
            }
            String thing = in.nextLine();
            if(thing.equalsIgnoreCase("endWrite")) {
                String date = String.valueOf(Calendar.getInstance());
                myWriter.append("document.write('<p style=\"text-align:center; font-size:65%; color:white;\">" + date + "</p>');");
				break;
            } else {
                if(CurrentLine == 0) {
                    myWriter.append(System.lineSeparator() + "document.write('<p style=\"text-align:center; font-size:160%; color:white;\"><strong>" + thing + "</strong></p>');");
                } else if(CurrentLine == 1) {
                    myWriter.append(System.lineSeparator() + "document.write('<p style=\"text-align:center; font-size:160%; color:white;\"><strong>An article by <a style=\"text-align:center; font-size:160%; color:rgb(36, 191, 218);\">" + thing + "</a></strong></p>');");
                } else if(CurrentLine == 2) {
                    myWriter.append(System.lineSeparator() + "document.write('</br>');");
                } else if(CurrentLine == 3) {
                    myWriter.append(System.lineSeparator() + "document.write('<p style=\"max-width:40%;\"><p style=\"text-align:center; color:white;\">" + thing + "</br>');");
                } else {
                    myWriter.append(System.lineSeparator() + "document.write('  " + thing + "</br>');");
                }
            }
            CurrentLine++;
        }
        myWriter.append(System.lineSeparator() + "The nightmare is over!");
        myWriter.close();
        System.out.println("Successfully created and wrote to the file at "+actualActualFileName +".");
}
    public static void main(String[] args) throws IOException {
        Scanner in = new Scanner(System.in);
        String referDocs = "lmao";
        String batTitle = referDocs;
        String modName = referDocs;
        String modVer = referDocs;
        String modVerMinor = referDocs;
        String betaOrNah = referDocs;
        betaOrNah = referDocs;
        Boolean beta;
        /*if (betaOrNah.equalsIgnoreCase("Y")) {
            beta = true;
        } else if (betaOrNah.equalsIgnoreCase("N")) {
            beta = false;
        } else {
            System.out.println("Invalid option! \"n\" chosen by default.");
            beta = false;
        }*/
		beta = false;
        daepicsuperepicfilewriter_darkmode(referDocs, batTitle, modName, modVerMinor, modVer, beta);
    }
    public static String removeTillWord(String input, String word) {
        return input.substring(input.indexOf(word));
    }
}
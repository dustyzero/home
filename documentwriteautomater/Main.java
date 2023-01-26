package com.iamthanosntakaholdmylimez;

import java.io.*;
import java.net.URL;
import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void daepicsuperepicfilewriter(String refferrDocs, String batTitle, String modName, String minorVer, String majorVer, Boolean betaOrNah) throws IOException {
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
        File file2 = new File(actualActualFileName2);
        boolean result2;
        try {
            result2 = file2.createNewFile();  //creates a new file
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        FileWriter toMyWriter = new FileWriter(actualActualFileName2);
        String contents2 = null;
        int NextLine = 1;
        Boolean end = false;
        String addNewLine;
        int amountOfStopLines = 0;
        int justStopped = 0;
        int timesAskSkipped = 0;
        if (betaOrNah) {
            toMyWriter.append("@echo off\n" +
                    "title " + modName + " (" + majorVer + "." + minorVer + "-BETA)\n" +
                    "java Main.java");
        } else {
            toMyWriter.append("@echo off\n" +
                    "title " + modName + " (" + majorVer + "." + minorVer + ")\n" +
                    "java Main.java");
        }
        myWriter.append("// bruh");
        while (true) {
            String thing = in.nextLine();
            if(thing.equalsIgnoreCase("endWrite")) {
                break;
            } else {
                myWriter.append(System.lineSeparator() + "document.write('" + thing + "');");
            }
        }
        myWriter.append(System.lineSeparator() + "The nightmare is over!");
        myWriter.close();
        toMyWriter.close();
        System.out.println("Successfully created and wrote to the file at "+actualActualFileName +".");
}
    public static void main(String[] args) throws IOException {
        Scanner in = new Scanner(System.in);
        System.out.println("What should you be referred to as in docs?");
        String referDocs = in.nextLine();
        System.out.println("Run.bat title?");
        String batTitle = in.nextLine();
        System.out.println("Mod name?");
        String modName = in.nextLine().trim();
        System.out.println("Mod version (major)?");
        String modVer = String.valueOf(in.nextInt());
        System.out.println("Mod version (minor)?");
        String modVerMinor = String.valueOf(in.nextInt());
        System.out.println("Beta? (y/n)");
        String betaOrNah = in.nextLine().trim();
        betaOrNah = in.nextLine().trim();
        Boolean beta;
        if (betaOrNah.equalsIgnoreCase("Y")) {
            beta = true;
        } else if (betaOrNah.equalsIgnoreCase("N")) {
            beta = false;
        } else {
            System.out.println("Invalid option! \"n\" chosen by default.");
            beta = false;
        }
        daepicsuperepicfilewriter(referDocs, batTitle, modName, modVerMinor, modVer, beta);
    }
    public static String removeTillWord(String input, String word) {
        return input.substring(input.indexOf(word));
    }
}